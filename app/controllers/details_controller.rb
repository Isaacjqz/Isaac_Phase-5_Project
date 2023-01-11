class DetailsController < ApplicationController

     # GET /details
  def index
    @details = Detail.all

    render json: @details
  end

   # GET /detail 
   def show
    render json: @detail 
  end
end
