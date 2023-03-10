class GoalsController < ApplicationController

    before_action :set_goal, only: [:show, :update, :destroy]

    # GET /goals
    def index
      @goals = Goal.all
      render json: @goals
    end
  
    # GET /goals
    def show
      render json: @goal
    end
  
    # POST /goals
    def create
        @goal = Goal.new(goal_params)
  
      if @goal.save
        render json: @goal, status: :created, location: @goal
      else
        render json: @goal.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /goals
    def update
      if @goal.update(goal_params)
        render json: @goal
      else
        render json: @goal.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /goals
    def destroy
      @goal.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_goal 
        @goal = Goal.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def goal_params
        params.require(:goal).permit(:user_id, :goals)
      end

end
