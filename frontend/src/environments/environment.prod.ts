export const environment = {
    production: true,

    baseFileUrl: `https://storage.googleapis.com/obnoxious-tenant-gcp-bucket/`,

    getLoginDetails: `https://asia-east2-crested-display-322005.cloudfunctions.net/checkLogin`,
    getUserToken: `https://asia-east2-crested-display-322005.cloudfunctions.net/generateToken`,
    crypt: `https://asia-east2-crested-display-322005.cloudfunctions.net/crypto`,

    getMasterList: `https://asia-east2-crested-display-322005.cloudfunctions.net/getMasterList`,
    fileUpload: `https://asia-east2-crested-display-322005.cloudfunctions.net/fileUpload`,
    getUserAccountDetails: `https://asia-east2-crested-display-322005.cloudfunctions.net/getUserAccountDetails`,
    insertUserAccountDetails: `https://asia-east2-crested-display-322005.cloudfunctions.net/insertUserAccountDetails`,
    updateUserAccountDetails: `https://asia-east2-crested-display-322005.cloudfunctions.net/updateUserAccountDetails`,
    updateUserAccountProfileImage: `https://asia-east2-crested-display-322005.cloudfunctions.net/updateUserAccountProfileImage`,
    updateUserAccountPassword: `https://asia-east2-crested-display-322005.cloudfunctions.net/updateUserPassword`,
};
