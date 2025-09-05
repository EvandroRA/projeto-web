// Exemplo do que você terá no seu WelcomePage.jsx
import HeaderBanner from '../../../components/ui/HeaderBanner';
import Button from '../../../components/ui/Button';
// ... resto do código
<div className="bg-gray-200 ...">
    <HeaderBanner /> {/* Nosso componente limpo */}
    <div className="bg-amber-50 ...">
        {/* ... código do ícone e textos ... */}
        <Button>Entrar</Button> {/* Nosso componente limpo */}
        <AuthRedirectLink />
    </div>
</div>