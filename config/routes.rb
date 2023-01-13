Rails.application.routes.draw do
  
  resources :goals
  resources :details
  resources :locations
  resources :matches
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout/:id", to: "sessions#destroy"
  get "/authorized", to: "users#show"
end
