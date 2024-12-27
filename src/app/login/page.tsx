import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="p-4 flex justify-center items-center flex-col">
        <div className="w-full sm:w-[500px] bg-indigo-950 border border-white/20 rounded-lg shadow">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-4xl text-center font-bold leading-tight tracking-tight text-white">
              Bienvenid@ de vuelta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white/5 border border-gray-100/10 text-white rounded-lg block w-full p-2.5 "
                  placeholder="email@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-white/5 border border-gray-100/10 text-white rounded-lg block w-full p-2.5"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-white/90">
                      Recordarme
                    </label>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-sm font-medium text-white/50 transition hover:text-white"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <span className="flex justify-between gap-2">
                <button
                  type="submit"
                  className="w-[calc(100%-65px)] min-h-[46px] py-2 rounded-lg text-white transition-all bg-indigo-800 border border-indigo-700 hover:bg-indigo-700"
                >
                  Iniciar sesion
                </button>

                <button
                  type="submit"
                  className="w-[65px] p-2 bg-white/90 transition hover:bg-white rounded-lg flex items-center justify-center"
                >
                  <Image
                    priority
                    src="/icons/google.svg"
                    height={32}
                    width={32}
                    alt="Follow us on Twitter"
                  />
                </button>
              </span>

              <span>
                <button
                  type="submit"
                  className="w-full mt-2 min-h-[46px] py-2 rounded-lg text-white transition-all bg-amber-700 border border-amber-600 hover:bg-amber-600"
                >
                  Jugar como invitado
                </button>
              </span>

              <p className="text-sm font-normal text-gray-500">
                ¿No tienes una cuenta?{" "}
                <a
                  href="#"
                  className="font-semibold text-white/50 transition hover:text-white"
                >
                  Registrate
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
