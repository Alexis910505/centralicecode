# 📧 Configuración de EmailJS para Formulario de Contacto

## ✅ Estado Actual del Formulario

El formulario de contacto ya está **completamente implementado** con:
- ✅ Validaciones completas en todos los campos
- ✅ Mensajes de error específicos
- ✅ Integración con EmailJS para envío real de correos
- ✅ Configuración lista para usar

## 🔧 Pasos para Activar el Envío de Correos

### 1. Crear Cuenta en EmailJS

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Crea una cuenta gratuita o inicia sesión
3. El plan gratuito incluye **200 emails por mes**

### 2. Configurar Servicio de Email

1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"** (recomendado)
4. Autoriza tu cuenta de Gmail: **centralizedcode@gmail.com**
5. Nombra el servicio como: **`service_centralized`**

### 3. Crear Template de Email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Nombra el template como: **`template_contact`**
4. Configura el template con este contenido:

#### **Asunto del email:**
```
Nuevo contacto desde el sitio web - {{from_name}}
```

#### **Contenido del email:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nuevo Contacto</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #2c3e50; text-align: center;">🔥 Nuevo Contacto desde el Sitio Web</h2>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">📋 Información del Cliente:</h3>
            <p><strong>👤 Nombre:</strong> {{from_name}}</p>
            <p><strong>📧 Email:</strong> {{from_email}}</p>
            <p><strong>📱 Teléfono:</strong> {{from_phone}}</p>
            <p><strong>🎯 Servicio de Interés:</strong> {{service_type}}</p>
        </div>
        
        <div style="background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">💬 Mensaje:</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 15px; background: #f0f8ff; border-radius: 5px;">
            <p style="margin: 0;"><strong>⚡ Responde pronto para mantener el interés del cliente</strong></p>
        </div>
    </div>
</body>
</html>
```

### 4. Obtener Public Key

1. Ve a **"Account"** en el dashboard
2. Copia tu **"Public Key"**
3. Se ve algo así: `your_public_key_here`

### 5. Actualizar Configuración

Edita el archivo `src/config/emailjs.js` y reemplaza:

```javascript
export const emailjsConfig = {
  publicKey: 'TU_PUBLIC_KEY_AQUI',     // ← Pega tu Public Key
  serviceId: 'service_centralized',     // ← Ya configurado
  templateId: 'template_contact'        // ← Ya configurado
};
```

## 🚀 Desplegar los Cambios

Después de configurar EmailJS:

```bash
npm run deploy
```

## ✅ Validaciones Implementadas

### **Nombre:**
- ✅ Campo obligatorio
- ✅ Mínimo 2 caracteres
- ✅ Máximo 50 caracteres

### **Email:**
- ✅ Campo obligatorio
- ✅ Formato válido de email

### **Teléfono:**
- ✅ Formato válido (opcional)
- ✅ Acepta + y espacios

### **Servicio:**
- ✅ Selección obligatoria

### **Mensaje:**
- ✅ Campo obligatorio
- ✅ Mínimo 10 caracteres
- ✅ Máximo 500 caracteres

## 📧 Funcionamiento

Cuando un cliente envía el formulario:

1. ✅ Se validan todos los campos
2. ✅ Se muestra loading durante el envío
3. ✅ Se envía correo a **centralizedcode@gmail.com**
4. ✅ Se muestra notificación de éxito/error
5. ✅ Se limpia el formulario si es exitoso

## 🎯 Emails que Recibirás

El correo llegará con toda la información:
- 👤 Nombre del cliente
- 📧 Email para responder
- 📱 Teléfono (si lo proporcionó)
- 🎯 Servicio de interés
- 💬 Mensaje detallado

## 🔧 Soporte

Si tienes problemas:
1. Verifica que las credenciales estén correctas
2. Revisa que el servicio de Gmail esté autorizado
3. Comprueba que el template esté activo
4. Revisa la consola del navegador para errores

**¡El formulario está listo para funcionar!** Solo necesitas configurar EmailJS con estos pasos. 