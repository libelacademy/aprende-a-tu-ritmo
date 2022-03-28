/** @format */

const questions = [
  {
    id: 0,
    question: '¿Qué hacer después de pagar?',
    answer: (
      <div>
        <p>
          Enviar el comprobante de pago a{' '}
          <b>coordinacionacademica@libel.academy</b> para que activen
          en tu cuenta los cursos comprados. No olvides indicar cuál
          es el correo con el que creaste la cuenta en Libel Academy.
          <br /> Si no tienes una cuenta creala en{' '}
          <a
            href='https://cursos.libel.academy/users/sign_up'
            target={'_blank'}
            rel='noreferrer'>
            https://cursos.libel.academy/users/sign_up
          </a>
        </p>
      </div>
    ),
  },
  {
    id: 1,
    question: '¿Tendré acceso a Discord y a feedback del maestro?',
    answer: (
      <div>
        <p>
          No, los cursos seleccionados para el aniversario son
          únicamente en vídeo. No incluyen Discord ni feedback del
          maestro.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: '¿Cuánto tiempo de acceso al curso tendré?',
    answer: (
      <div>
        <p>
          Los cursos seleccionados para el aniversario Libel tienen un
          tiempo de acceso de un año.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    question: '¿Cómo reclamo el cupón de 40% en másteres?',
    answer: (
      <div>
        <p>
          Envía un correo a{' '}
          <b> coordinacionacademica@libel.academy</b> indicando que
          compraste 230 USD o más en los cursos seleccionados para el
          aniversario. No olvides mencionar el medio de pago usado y
          el correo registrado en los pagos.
          <br />
          Revisaremos y si cumples con lo anterior, activaremos el
          cupón.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    question:
      '¿Qué hago si el curso comprado no aparece en mi cuenta?',
    answer: (
      <div>
        <p>
          Enviar el comprobante de pago a{' '}
          <b>coordinacionacademica@libel.academy</b> para que activen
          en tu cuenta los cursos comprados.
          <br />
          No olvides indicar cuál es el correo con el que creaste la
          cuenta en Libel Academy.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question:
      '¿Los cursos incluyen licencias?',
    answer: (
      <div>
        <p>
        No, ninguno de los cursos o membresías del aniversario incluyen licencias
        </p>
      </div>
    ),
  },
];

export default questions;
