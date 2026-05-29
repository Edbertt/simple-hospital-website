class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])

        if user&.authenticate(params[:password])
            token = JsonWebToken.encode(user_id: user.id)

            render json: {
                message: "Logged in successfully",
                token: token,
                user: {
                    id: user.id,
                    email: user.email,
                    type_id: user.type_id,
                    name: user.name
                }
            }, status: :ok
        else
            render json: {
                error: "Invalid email or password"
            }, status: :unauthorized
        end
    end

    def destroy
        render json: {
            message: "Logged out successfully"
        }, status: :ok
    end
end