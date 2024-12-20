import cloudinary from 'cloudinary';

const fileStorageConnection = () => {
  cloudinary.v2.config({
    cloud_name: 'dwkknt0pe', 
    api_key: '284815636567661', 
    api_secret: 'OSTaBqAthccs-HGEqYA2SRAlyqQ' 
  })
}

export default fileStorageConnection;
