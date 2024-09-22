class ComplexNumber {
    constructor(Re, Im) {
        this.Re = Re;
        this.Im = Im;
    }

    Add(Other) {
        return new ComplexNumber(this.Re + Other.Re, this.Im + Other.Im);
    }

    Subtract(Other) {
        return new ComplexNumber(this.Re - Other.Re, this.Im - Other.Im);
    }

    Multiply(Other) {
        const Real      = this.Re * Other.Re - this.Im * Other.Im;
        const Imaginary = this.Re * Other.Im + this.Im * Other.Re;
        return new ComplexNumber(Real, Imaginary);
    }

    Inverse(){
        const Denominator = (this.Re*this.Re + this.Im*this.Im);
        if (Denominator === 0) {
            throw new Error("Cannot compute the inverse of a complex number with zero magnitude.");
        }
        const Real        = (this.Re)/Denominator;
        const Imaginary   = (-1*this.Im)/Denominator;
        return new ComplexNumber(Real, Imaginary);
    }

    Magnitude(){
        const Magnitude = Math.sqrt(this.Re*this.Re + this.Im*this.Im);
        return Magnitude;
    }

    Angle(){
        if (typeof this.Im === 'number' && typeof this.Re === 'number') {
            const Angle = Math.atan2(this.Im, this.Re); 
            return Angle;
        } else {
            throw new Error('Real and Imaginary parts must be numbers.');
        }
    }

    ToString(){
        return `${this.Re} + ${this.Im}i`;
    }
}

function ConvertCartesian(){
    const Re_A = document.getElementById('Re_A').value; const Im_A = document.getElementById('Im_A').value;
    const Re_B = document.getElementById('Re_B').value; const Im_B = document.getElementById('Im_B').value;
    const Re_C = document.getElementById('Re_C').value; const Im_C = document.getElementById('Im_C').value;
    const Re_D = document.getElementById('Re_D').value; const Im_D = document.getElementById('Im_D').value;
    const Re_E = document.getElementById('Re_E').value; const Im_E = document.getElementById('Im_E').value;
    const Re_F = document.getElementById('Re_F').value; const Im_F = document.getElementById('Im_F').value;

    const A = new ComplexNumber(Re_A, Im_A);
    const B = new ComplexNumber(Re_B, Im_B);
    const C = new ComplexNumber(Re_C, Im_C);
    const D = new ComplexNumber(Re_D, Im_D);
    const E = new ComplexNumber(Re_E, Im_E);
    const F = new ComplexNumber(Re_F, Im_F);

    const Determinant  = (A.Multiply(E)).Subtract(D.Multiply(B));
    const DeterminantX = (C.Multiply(E)).Subtract(F.Multiply(B));
    const DeterminantY = (A.Multiply(F)).Subtract(D.Multiply(C));

    const ValueX = DeterminantX.Multiply(Determinant.Inverse());
    const ValueY = DeterminantY.Multiply(Determinant.Inverse());

    const detXElement = document.getElementById('Detx');
    const detYElement = document.getElementById('Dety');
    const detElement = document.getElementById('Det');
    const xElement = document.getElementById('X');
    const yElement = document.getElementById('Y');

    detXElement.value = `${DeterminantX.Re.toFixed(3)} + ${DeterminantX.Im.toFixed(3)}𝑖`;
    detYElement.value = `${DeterminantY.Re.toFixed(3)} + ${DeterminantY.Im.toFixed(3)}𝑖`;
    detElement.value = `${Determinant.Re.toFixed(3)} + ${Determinant.Im.toFixed(3)}𝑖`;
    xElement.value = `X = ${ValueX.Re.toFixed(3)} + ${ValueX.Im.toFixed(3)}𝑖`;
    yElement.value = `Y = ${ValueY.Re.toFixed(3)} + ${ValueY.Im.toFixed(3)}𝑖`;
   
}

function ConvertPolar(){
    const Re_A = document.getElementById('Re_A').value; const Im_A = document.getElementById('Im_A').value;
    const Re_B = document.getElementById('Re_B').value; const Im_B = document.getElementById('Im_B').value;
    const Re_C = document.getElementById('Re_C').value; const Im_C = document.getElementById('Im_C').value;
    const Re_D = document.getElementById('Re_D').value; const Im_D = document.getElementById('Im_D').value;
    const Re_E = document.getElementById('Re_E').value; const Im_E = document.getElementById('Im_E').value;
    const Re_F = document.getElementById('Re_F').value; const Im_F = document.getElementById('Im_F').value;

    const A = new ComplexNumber(Re_A, Im_A);
    const B = new ComplexNumber(Re_B, Im_B);
    const C = new ComplexNumber(Re_C, Im_C);
    const D = new ComplexNumber(Re_D, Im_D);
    const E = new ComplexNumber(Re_E, Im_E);
    const F = new ComplexNumber(Re_F, Im_F);

    const Determinant  = (A.Multiply(E)).Subtract(D.Multiply(B));
    const DeterminantX = (C.Multiply(E)).Subtract(F.Multiply(B));
    const DeterminantY = (A.Multiply(F)).Subtract(D.Multiply(C));

    const ValueX = DeterminantX.Multiply(Determinant.Inverse());
    const ValueY = DeterminantY.Multiply(Determinant.Inverse());

    const detXElement = document.getElementById('Detx');
    const detYElement = document.getElementById('Dety');
    const detElement = document.getElementById('Det');
    const xElement = document.getElementById('X');
    const yElement = document.getElementById('Y');

    detXElement.value = `${DeterminantX.Magnitude().toFixed(3)}∠${DeterminantX.Angle().toFixed(3)}`;
    detYElement.value = `${DeterminantY.Magnitude().toFixed(3)}∠${DeterminantY.Angle().toFixed(3)}`;
    detElement.value  = `${Determinant.Magnitude().toFixed(3)}∠${Determinant.Angle().toFixed(3)}`;
    xElement.value = `X = ${ValueX.Magnitude().toFixed(3)}∠${ValueX.Angle().toFixed(3)}`;
    yElement.value = `Y = ${ValueY.Magnitude().toFixed(3)}∠${ValueY.Angle().toFixed(3)}`;
}

function Clear() {
    const inputs = document.querySelectorAll('#CalculatorDisplay input');
    inputs.forEach(input => {
        input.value = '';
    });
}
