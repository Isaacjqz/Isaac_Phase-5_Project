class SessionsController < ApplicationController

    skip_before_action :authorized_user, :only => [:create]

    def create 
        user = User.find_by(email:params[:email])

        if user&.authenticate(params[:password])
            #set user to sessions
            session[:user_id] = user.id
            render json:user, status: :ok
        else
            render json:{error: "Invalid Password or Username"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        byebug
        head :no_content
    end
end
