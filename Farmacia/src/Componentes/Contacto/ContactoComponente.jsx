import './ContactoComponente.css'
export const ContactoComponente = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta o comentario? ¡Contáctanos, estaremos encantados de ayudarte!</p>

      <form action="https://formsubmit.co/brayan12.es@gmail.com" method="POST">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Tu nombre" 
            required 
          />
        </div>

        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Tu correo electrónico" 
            required 
          />
        </div>

        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Tu número de teléfono" 
            required 
            pattern="[0-9]{10}" 
          />
        </div>

        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            placeholder="Escribe tu mensaje" 
            required 
          ></textarea>
        </div>

        <input type="hidden" name="_next" value="https://tuweb.com/gracias" /> {/* Redirección */}
        <input type="submit" value="Enviar" />
      </form>
    </section>
  )
}
