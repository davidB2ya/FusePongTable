import { Disclosure } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/logo-fusepong.png'

const navigation = [
    { name: 'Inicio', href: '/', current: true },
    { name: 'Nosotros', href: 'http://www.fusepong.com/', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Headers = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <div className="flex justify-start lg:w-0 lg:flex-1">
                                        <a href="http://www.fusepong.com/">
                                            <img
                                                className="h-8 w-auto sm:h-10"
                                                src={Logo}
                                                alt="logo"
                                            />
                                        </a>
                                    </div>
                                    <a href="http://www.fusepong.com/">
                                        <img
                                            className="hidden lg:block h-10 w-auto"
                                            src={Logo}
                                            alt="logo"
                                        />
                                    </a>
                                </div>

                                <div className="hidden sm:block sm:ml-6 ">
                                    <div className="flex space-x-4 mx-8">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-blue-400',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    <a href="/register" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-green-400">
                                        Registrarse
                                    </a>
                                    <a
                                        href="/login"
                                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
                                    >
                                        Iniciar Sesion
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Headers