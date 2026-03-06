export function Footer() {
  return (
    <footer
      className="flex min-h-[80px] items-center justify-center md:min-h-[100px]"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <p className="px-4 text-center text-xs text-gray-400 md:text-sm">
        Todos os direitos reservados - Mentoria Caixa Preta
      </p>
    </footer>
  );
}
