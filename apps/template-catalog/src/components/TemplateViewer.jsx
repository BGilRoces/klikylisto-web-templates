import React from 'react'
import { useParams } from 'react-router-dom'
import TemplateLayout from './TemplateLayout'
import ErrorPage from './pages/ErrorPage'

// Importar templates desde las nuevas ubicaciones
import Cafeteria1App from '../templates/cafeteria-1/App'
import Cafeteria2App from '../templates/cafeteria-2/App'
import Cafeteria3App from '../templates/cafeteria-3/App'

const TemplateViewer = ({ templates }) => {
  const { templateId } = useParams()
  const template = templates.find(t => t.id === templateId)

  if (!template) {
    return <ErrorPage />
  }

  const renderTemplate = () => {
    switch (templateId) {
      case 'cafeteria-1':
        return <Cafeteria1App />
      case 'cafeteria-2':
        return <Cafeteria2App />
      case 'cafeteria-3':
        return <Cafeteria3App />
      default:
        return (
          <ErrorPage 
            title="Template en Desarrollo"
            message="Este template estará disponible pronto"
            showBackButton={false}
          />
        )
    }
  }

  return (
    <TemplateLayout templateInfo={template}>
      {renderTemplate()}
    </TemplateLayout>
  )
}

export default TemplateViewer
