const INTERPRETATION_PROMPT = 'Please interpret the latest Eco Engine runtime reports, Eco Balance charts, spatial maps, and runtime animation. Focus on ecological drift, site differences, boundary instability, recovery patterns, and long-term ecological movement.';

const thresholdBands = [
  { min: 0, max: 20, label: 'Severe Arid Risk', tone: 'critical' },
  { min: 20, max: 35, label: 'Arid Pressure', tone: 'warning' },
  { min: 35, max: 50, label: 'Semi-Arid Warning', tone: 'warning' },
  { min: 50, max: 65, label: 'Fragile Balance', tone: 'balanced' },
  { min: 65, max: 80, label: 'Stable Recovery', tone: 'stable' },
  { min: 80, max: 100, label: 'Strong Ecological Resilience', tone: 'stable' },
];

function getThresholdBand(value) {
  const numericValue = Number(value);
  return thresholdBands.find((band) => numericValue >= band.min && numericValue <= band.max) || thresholdBands[0];
}

function updateThresholdInterpretation() {
  const slider = document.getElementById('eco-balance-slider');
  const valueLabel = document.getElementById('threshold-value');
  const meaning = document.getElementById('threshold-meaning');

  if (!slider || !valueLabel || !meaning) {
    return;
  }

  const band = getThresholdBand(slider.value);
  valueLabel.textContent = slider.value;
  meaning.textContent = `${band.label} (${band.min}–${band.max})`;
}

function updateRuntimeTimestamps() {
  const now = new Date();
  const formatted = now.toLocaleString();
  const timestampTargets = [
    'current-timestamp',
  ];

  timestampTargets.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = formatted;
    }
  });
}

async function copyRuntimeInterpretationPrompt() {
  const status = document.getElementById('copy-status');

  try {
    await navigator.clipboard.writeText(INTERPRETATION_PROMPT);
    if (status) {
      status.textContent = 'Runtime interpretation prompt copied to clipboard.';
    }
  } catch (error) {
    if (status) {
      status.textContent = 'Clipboard unavailable.';
    }
  }
}

function initialiseConsole() {
  const slider = document.getElementById('eco-balance-slider');
  const copyButton = document.getElementById('copy-prompt-button');

  updateRuntimeTimestamps();
  updateThresholdInterpretation();

  if (slider) {
    slider.addEventListener('input', updateThresholdInterpretation);
  }

  if (copyButton) {
    copyButton.addEventListener('click', copyRuntimeInterpretationPrompt);
  }

  window.setInterval(updateRuntimeTimestamps, 60000);
}

document.addEventListener('DOMContentLoaded', initialiseConsole);
