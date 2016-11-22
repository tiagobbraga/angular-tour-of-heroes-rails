class ApiController < ApplicationController

  # Turn on request forgery protection
  # csrf protection ng: http://stackoverflow.com/questions/14734243/rails-csrf-protection-angular-js-protect-from-forgery-makes-me-to-log-out-on
  protect_from_forgery

  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  ### API
  def all
    respond_to do |format|
      format.json { render json: params[:name].present? ? Hero.where("name like ?", "%"+params[:name]+"%") : Hero.all } # .to_s.length == 0 ? Hero.all : Hero.where("name like ?", "%#{@params[:name]}%")
    end
  end

  def create
    hero = Hero.new(name: params[:name])
    if hero.save
      respond_to do |format|
        format.json { render json: hero }
      end
    end
  end

  def delete
    Hero.delete(params[:id])
    respond_to do |format|
      format.json { render json: {} }
    end
  end

  def update
    hero = Hero.where(id: params[:id]).first
    hero.name = params[:name]
    if hero.save
      respond_to do |format|
        format.json { render json: hero }
      end
    end
  end
  ### API

  protected
    # In Rails 4.2 and above
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end
    
end
