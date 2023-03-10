Rails.application.routes.draw do
  
  resources :user_locations
  resources :goals
  resources :details
  resources :locations
  resources :matches
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized", to: "users#show"
  get "/user_feed", to: "users#users_to_match" 

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
