import { useForm } from 'react-hook-form';
import { templates } from '../templates/messages'
import { generateTxtFile } from '../utils/generateText';
import { openWhatsappMessage } from '../utils/sendWhatsapp';
import "../styles/Form.css"

export default function formMessage() {
  const { register, handleSubmit } = useForm<FormData>({
  defaultValues: {
    name: '',
    age: '',
    yearsExp: '',
    degree: '',
    position: '',
    company: '',
    stack: '',
    recruiter: '',
    phone: '',
    type: 'presentation',
    action: 'download'
  }
});

  interface FormData {
    type: 'presentation' | 'thanks' | 'first_contact';
    name: string;
    age: string;
    yearsExp: string;
    degree: string;
    position: string;
    company: string;
    stack: string;
    recruiter: string;
    phone: string;
    email: string;
    portfolio: string;
    action: 'download' | 'whatsapp';
  }

  const onSubmit = (data: FormData) => {
    const rawTemplate = templates[data.type];
    const message = rawTemplate.replace(/{{(\w+)}}/g, (_, key) => (data as any)[key] || '');
    if (data.action === 'download') generateTxtFile(message);
    if (data.action === 'whatsapp') openWhatsappMessage(data.phone, message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full px-4 lg:w-max">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
        
          <input placeholder="Fullname" {...register('name')} className="input input-neutral" />
          <input type='number' placeholder="Age" {...register('age')} className="input input-neutral" />
          <input placeholder="Position" {...register('position')} className="input input-neutral" />
          <input placeholder="Company" {...register('company')} className="input input-neutral" />
          <input placeholder="Stack (Separated by comma (,))" {...register('stack')} className="input input-neutral" />
          <input placeholder="Recruiter" {...register('recruiter')} className="input input-neutral" />
          <input placeholder="Phone" {...register('phone')} className="input input-neutral" />

        </div>
        <div className="flex flex-col gap-4">
          <input type='number' placeholder="Years of experience" {...register('yearsExp')} className="input input-neutral" />
          <input placeholder="Degree" {...register('degree')} className="input input-neutral" />
          <input type='email' placeholder="Email" {...register('email')} className="input input-neutral" />
          <input placeholder="Porfolio url" {...register('portfolio')} className="input input-neutral" />
        </div>
        <select {...register('type')} className="select">
            <option value="presentation">Carta Presentación</option>
            <option value="thanks">Agradecimiento</option>
            <option value="first_contact">Primer Contacto</option>
          </select>
          <select {...register('action')} className="select">
            <option value="download">Descargar .txt</option>
            <option value="whatsapp">Enviar por WhatsApp</option>
          </select>
      </div>
      <div className="col">
          <p className="text-xs text-gray-500">* Los campos son opcionales, pero si no se completan, el mensaje no se generará correctamente.</p>
          <p className="text-xs text-gray-500">* El número de teléfono debe incluir el código de país (ejemplo: +34 para España).</p>
        </div>
      <button type="submit" className="bg-blue-500 h-[3rem] cursor-pointer text-white p-2 rounded">Generate</button>
    </form>
  );
}