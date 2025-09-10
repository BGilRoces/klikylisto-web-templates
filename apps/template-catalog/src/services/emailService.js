import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, AUTORESPONSE_TEMPLATE_ID } from '../config/emailjs'

// Inicializar EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

export const sendContactEmail = async (formData) => {
  try {
    // Preparar los datos para el template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      template_preference: formData.template || 'No especificado',
      message: formData.message || 'Sin comentarios adicionales',
      to_email: 'klikylisto@gmail.com', // Tu email donde recibirás las consultas
    }

    console.log('Enviando email con datos:', templateParams)

    // Enviar email principal
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    console.log('Email enviado exitosamente:', response)

    // Opcional: Enviar auto-respuesta al cliente
    if (AUTORESPONSE_TEMPLATE_ID) {
      const autoResponseParams = {
        to_name: formData.name,
        to_email: formData.email,
        template_preference: formData.template,
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        AUTORESPONSE_TEMPLATE_ID,
        autoResponseParams
      )

      console.log('Auto-respuesta enviada')
    }

    return {
      success: true,
      message: 'Email enviado correctamente'
    }

  } catch (error) {
    console.error('Error enviando email:', error)
    
    return {
      success: false,
      message: 'Error al enviar el email: ' + error.text || error.message
    }
  }
}

// Función para validar la configuración
export const validateEmailConfig = () => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG
  
  if (!SERVICE_ID || SERVICE_ID === 'tu_service_id_aqui') {
    throw new Error('SERVICE_ID no configurado en emailjs.js')
  }
  
  if (!TEMPLATE_ID || TEMPLATE_ID === 'tu_template_id_aqui') {
    throw new Error('TEMPLATE_ID no configurado en emailjs.js')
  }
  
  if (!PUBLIC_KEY || PUBLIC_KEY === 'tu_public_key_aqui') {
    throw new Error('PUBLIC_KEY no configurado en emailjs.js')
  }
  
  return true
}
