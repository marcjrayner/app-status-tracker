class AppStatusesController < ApplicationController
  def index
    app_statuses = AppStatus.order("created_at DESC")
    render json: app_statuses
  end

  def create
    app_status = AppStatus.create(app_status_param)
    render json: app_status
  end

  def update
    app_status = AppStatus.find(params[:id])
    app_status.update(app_status_param)
    render json: app_status
  end

  def destroy
    app_status = AppStatus.find(params[:id])
    app_status.destroy
    head :no_content, status: :ok
  end

  private
    def app_status_param
      params.require(:app_status).permit(:message, :down)
    end
end
