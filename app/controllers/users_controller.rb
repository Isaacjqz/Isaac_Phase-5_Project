class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  wrap_parameters :user, include: [:first_name, :last_name, :email, :zip_code, :age, :user_name, :password, :current_country, :current_state, :current_city]
  skip_before_action :authorized_user, only: [:create]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    # user = User.find(session[:user_id])
    render json: current_user, status: :ok
    
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    render json: @user, status: :created 

    # if user.save
    #   render json: user, status: :created, location: user
    # else
    #   render json: user.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    head :no_content
  end

  def users_to_match
    # render json: current_user 
    # byebug
    if current_user
      users_for_feed = User.all.filter do |each_user| 
        each_user.id != current_user.id 
      end 
      render json: users_for_feed
    else
      render json: []
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :zip_code, :age, :user_name, :password, :current_country, :current_state, :current_city)
    end
end
