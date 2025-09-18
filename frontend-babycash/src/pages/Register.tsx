// src/pages/Register.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (!acceptedTerms) {
      setError('Debes aceptar los términos y el tratamiento de datos.');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:3000/auth/register', {
        nombre: name,
        apellido: apellido,
        correo: email,
        contrasena: password,
        confirmarContrasena: confirmPassword,
        tipo: 'cliente',
      });
      navigate('/login');
    } catch (err: any) {
      // Mensajes de error en español
      let msg = err?.response?.data?.message;
      if (Array.isArray(msg)) {
        msg = msg.map((m: string) => {
          if (m.includes('apellido')) return 'El apellido es obligatorio.';
          if (m.includes('nombre')) return 'El nombre es obligatorio.';
          if (m.includes('correo')) return 'El correo es obligatorio o ya está registrado.';
          if (m.includes('contrasena')) return 'La contraseña es obligatoria.';
          if (m.includes('confirmarContrasena')) return 'Debes confirmar la contraseña.';
          if (m.includes('no coincide')) return 'Las contraseñas no coinciden.';
          return m;
        }).join(' ');
      }
      setError(
        msg ||
        (typeof err?.message === 'string' ? err.message : 'Error al registrar. Intenta de nuevo.')
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-baby-blue via-baby-pink to-baby-mint px-4 ">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/productos/icono-pinguino.png"
            alt="Logo Pingüino"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Regístrate en <span className="text-baby-blue">Baby Cash</span>
        </h2>

        {/* Error */}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-baby-blue"
            />
          </div>
          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              placeholder="Tu apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-baby-blue"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-baby-blue"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-baby-blue pr-10"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-baby-blue focus:outline-none"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar contraseña
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-baby-blue pr-10"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-baby-blue focus:outline-none"
                onClick={() => setShowConfirm((v) => !v)}
                aria-label={showConfirm ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Acepto los{' '}
              <Link to="/terminos" className="text-baby-blue font-medium hover:underline">
                términos y condiciones
              </Link>{' '}
              y la{' '}
              <Link to="/tratamiento-datos" className="text-baby-blue font-medium hover:underline">
                política de tratamiento de datos
              </Link>
              .
            </label>
          </div>

          {/* Botón */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 bg-baby-blue text-white rounded-lg font-semibold shadow-md hover:bg-baby-pink transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Registrando...' : 'Registrarme'}
          </motion.button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-baby-blue font-medium hover:underline">
              Inicia sesión
            </Link>
          </p>
          <p className="mt-2">
            <Link to="/forgot-password" className="text-baby-pink font-medium hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
