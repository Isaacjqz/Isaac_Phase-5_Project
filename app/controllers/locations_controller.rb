class LocationsController < ApplicationController

    before_action :set_location, only: [:show, :update, :destroy]

    # GET /location
    def index
        @locations = Location.all
    
        render json: @locations
      end
    
      # GET /location
      def show
        render json: @location
      end

       # PATCH/PUT /location
    def update
        if @location.update(location_params)
          render json: @location
        else
          render json: @location.errors, status: :unprocessable_entity
        end
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def set_location
        @location = Location.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def location_params
        params.require(:location).permit(:current_country, :current_state, :current_city, :zip_code)
      end

end
