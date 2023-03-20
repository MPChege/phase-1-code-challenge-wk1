
		 calculateBtn = document.getElementById('calculate');
		const speedInput = document.getElementById('speed');
		const resultDiv = document.getElementById('result');

		calculateBtn.addEventListener('click', () => {
			const speed = parseFloat(speedInput.value);
			if (isNaN(speed)) {
				resultDiv.innerHTML = '<div class="error">Please enter a valid speed</div>';
				return;
			}

			let demeritPoints = 0;
			if (speed >= 70) {
				demeritPoints = Math.floor((speed - 70) / 5);
			}

			if (demeritPoints === 0) {
				resultDiv.innerHTML = 'Ok';
			} else {
				resultDiv.innerHTML = `Demerit points: ${demeritPoints}`;
			}
		});
	