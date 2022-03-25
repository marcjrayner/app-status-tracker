require "test_helper"

class AppStatusesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get app_statuses_path
    assert_response :success
  end
end
