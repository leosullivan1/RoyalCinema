class ContactsController < ApplicationController

  before_action :update_concerned_path, only: [:create]

  def create
    @contact = contact_service.build_contact(contact_params)
    response = contact_service.send_email(@contact)

    redirect_notice = if @contact.save
                        'The contact was stored'
                      else
                        'The contact was not stored'
                      end

    redirect_notice += if response.status_code.to_i == 202
                         ' & was sent successfully'
                       else
                         ' & was not sent successfully'
                       end

    redirect_to @return_to, notice: redirect_notice
  end

  private

  def contact_service
    ContactService
  end

  # Only allow a list of trusted parameters through.
  def contact_params
    params.fetch(:contact, {}).permit(:name, :email, :subject, :message)
  end

  # Updates the return to path
  def update_concerned_path
    @return_to = params[:return_to]
  end

end
