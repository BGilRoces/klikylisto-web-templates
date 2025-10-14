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
    if (AUTORESPONSE_TEMPLATE_ID && AUTORESPONSE_TEMPLATE_ID !== 'tu_template_autoresponse_id_aqui') {
      const autoResponseParams = {
        to_name: formData.name,
        to_email: formData.email,
        template_preference: formData.template || 'No especificado',
        reply_to: formData.email, // Email del cliente para la respuesta
        from_name: 'KlikYListo', // Tu nombre/empresa
      }

      console.log('Enviando auto-respuesta a:', formData.email)

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        AUTORESPONSE_TEMPLATE_ID,
        autoResponseParams
      )

      console.log('Auto-respuesta enviada al cliente')
    }

    return {
      success: true,
      message: 'Email enviado correctamente'
    }

  } catch (error) {
    console.error('Error enviando email:', error)
    
    // Manejo específico de errores de Gmail
    let errorMessage = 'Error al enviar el email'
    
    if (error.text && error.text.includes('insufficient authentication')) {
      errorMessage = 'Error de autenticación con Gmail. Por favor, reconecta el servicio en EmailJS Dashboard.'
    } else if (error.text && error.text.includes('Daily Limit')) {
      errorMessage = 'Límite diario de emails alcanzado. Intenta nuevamente mañana.'
    } else if (error.text && error.text.includes('Invalid')) {
      errorMessage = 'Configuración de EmailJS incorrecta. Verifica los IDs en la configuración.'
    } else if (error.text) {
      errorMessage = `Error: ${error.text}`
    } else if (error.message) {
      errorMessage = `Error: ${error.message}`
    }
    
    return {
      success: false,
      message: errorMessage
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

// Función de diagnóstico para probar la conexión
export const testEmailConnection = async () => {
  try {
    validateEmailConfig()
    
    const testParams = {
      from_name: 'Test Usuario',
      from_email: 'test@ejemplo.com',
      template_preference: 'Moderno',
      message: 'Este es un email de prueba',
      to_email: 'klikylisto@gmail.com',
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      testParams
    )

    return {
      success: true,
      message: 'Conexión exitosa',
      response
    }

  } catch (error) {
    return {
      success: false,
      message: `Error de conexión: ${error.text || error.message}`,
      error
    }
  }
}
