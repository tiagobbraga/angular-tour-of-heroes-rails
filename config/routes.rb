Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  scope '/api' do
    scope '/heroes' do
      get '/' => 'api#all'
    end
  end

  root :to => "application#index"
  get "*unmatched_route" => "application#index"

  get '/api/heroes' => 'api#all', defaults: { format: :json }
  post '/api/heroes' => 'api#create', defaults: { format: :json }
  delete '/api/heroes/:id' => 'api#delete', defaults: { format: :json }
  put '/api/heroes/:id' => 'api#update', defaults: { format: :json }
end
