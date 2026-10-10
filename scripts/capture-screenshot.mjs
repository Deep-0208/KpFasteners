import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import os from 'os';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputPath = path.resolve('public/live-hero-slide1.png');
const tempUserData = path.join(os.tmpdir(), `edge_shot_${Date.now()}`);

console.log('Capturing fresh Slide 1 screenshot with clean profile...');

try {
  execSync(`"${edgePath}" --headless=new --disable-gpu --incognito --user-data-dir="${tempUserData}" --disk-cache-size=0 --window-size=1280,820 --virtual-time-budget=1200 --screenshot="${outputPath}" http://localhost:3000/`, {
    stdio: 'inherit'
  });

  if (fs.existsSync(outputPath)) {
    const stats = fs.statSync(outputPath);
    console.log(`Success! Slide 1 screenshot saved to ${outputPath} (${stats.size} bytes)`);
  }
} catch (err) {
  console.error('Failed to capture screenshot:', err.message);
} finally {
  try {
    fs.rmSync(tempUserData, { recursive: true, force: true });
  } catch {}
}
