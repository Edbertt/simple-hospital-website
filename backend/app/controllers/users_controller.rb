class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # POST /users
  # POST /users.json
  def create
    user = User.new(user_params)
    unless user.type_id.present?
      user.type_id = 0
    end

    if user.save
      token = JsonWebToken.encode(user_id: user.id)

      render json: {
        message: "Registered successfully",
        token: token,
        user: {
          id: user.id,
          email: user.email,
          type_id: user.type_id,
          name: user.name
        }
      }, status: :created
    else
      render json: {
        errors: user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    if @user.update(user_params)
      render :show, status: :ok, location: @user
    else
      render json: @user.errors, status: :unprocessable_content
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy!
  end

  def me
    if current_user
      render json: {
        user: {
          id: current_user.id,
          email: current_user.email
        }
      }, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :type_id, :password, :password_confirmation)
    end
end
