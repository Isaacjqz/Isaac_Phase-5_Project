class SessionsController < ApplicationController

    def login
        user = User.find_by(name:params[:name])

        if user&.authenticate(params[:password])
            #set user to sessions
            render json: user, status: :ok
        else
            render json: {:errors: "Invalid Password or Username"}, status: :unauthorized
        end
    end
end
