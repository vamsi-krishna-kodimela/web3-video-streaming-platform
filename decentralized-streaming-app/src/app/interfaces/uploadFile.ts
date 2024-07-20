interface IuploadResponse {
  uploads: {
    id: String;
    service_account_id: String;
    presigned_url: String;
    presigned_url_expiration: String;
    presigned_url_expired: Boolean;
    create_time: String;
    update_time: String;
  }[];
}

export { IuploadResponse };
