class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session
  include DeviseTokenAuth::Concerns::SetUserByToken

  after_filter :set_csrf_cookie

  def index
    render :file => 'public/index.html'
  end

  def set_csrf_cookie
    if protect_against_forgery?
      cookies['XSRF-TOKEN'] = form_authenticity_token
    end
  end

  protected
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end

end
