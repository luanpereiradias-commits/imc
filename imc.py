print("🧮 Calculadora de IMC - Python Puro\n")

def calcular_imc():
    while True:
        try:
            peso = float(input("Digite seu peso em kg: ").strip())
            if peso <= 0:
                print("❌ O peso deve ser maior que zero.\n")
                continue

            altura = float(input("Digite sua altura em metros: ").strip())
            if altura <= 0:
                print("❌ A altura deve ser maior que zero.\n")
                continue

            imc = peso / (altura ** 2)
            imc = round(imc, 2)

            print("\n" + "="*50)
            print(f"   Seu IMC é: {imc}")
            
            if imc < 18.5:
                print("   Classificação: Abaixo do peso")
            elif imc < 25:
                print("   Classificação: Peso normal")
            elif imc < 30:
                print("   Classificação: Sobrepeso")
            elif imc < 35:
                print("   Classificação: Obesidade grau I")
            elif imc < 40:
                print("   Classificação: Obesidade grau II")
            else:
                print("   Classificação: Obesidade grau III (mórbida)")
            print("="*50 + "\n")

            resp = input("Deseja calcular novamente? (s/n): ").strip().lower()
            if resp != 's':
                print("Obrigado por usar a calculadora!")
                break

        except ValueError:
            print("❌ Erro: Digite apenas números válidos.\n")
        except:
            print("❌ Ocorreu um erro inesperado.\n")

if __name__ == "__main__":
    calcular_imc()
  
