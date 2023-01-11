class MatchesController < ApplicationController

    before_action :set_matche, only: [:show, :update, :destroy]

  # GET /users
  def index
    @matches = Match.all

    render json: @matches
  end

  # GET /matches/1
  def show
    render json: @match
    
  end

  # POST /matches
  def create
    @match = Match.new(matche_params)

    if @match.save
      render json: @match, status: :created, location: @match
    else
      render json: @match.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /matches/1
  def update
    if @match.update(matche_params)
      render json: @match
    else
      render json: @match.errors, status: :unprocessable_entity
    end
  end

  # DELETE /matches/1
  def destroy
    @match.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_matche
      @match = match.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def match_params
      params.require(:match).permit(:user_id, :location_id, :status, :message, :match_time)
    end
end
