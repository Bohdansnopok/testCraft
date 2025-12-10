import bcrypt from 'bcryptjs';

const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.post('/registration', async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(400).json({ error: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  res.json({ message: 'User registered successfully', user });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    return res.status(400).json({ error: 'User not found' });
  }
  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });

  res.json({ message: 'User registered successfully', user });
});

app.post('/tests', async (req, res) => {
  try {
    const tests = await prisma.test.findMany();
    res.json(tests);
  } catch (error) {
    console.error('Error fetching tests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('testCreate', async (req, res) => {
  const { id, name, description, type, subject, question } = req.body;

  const test = await prisma.test.create({
    data: { id, name, description, type, subject, question },
  });

  res.json({ message: 'Test created successfully', test });
});

app.delete('/user/:id', async (req, res) => {
  const user = await prisma.user.findUnique({ where: { email } });

  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.json({ message: 'User deleted successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'User not found' });
  }
});

app.delete('test/:id', async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id } });

  try {
    await prisma.test.delete({ where: { id: Number(id) } });
    res.json({ message: 'Test deleted successfully', test });
  } catch (error) {
    res.status(500).json({ error: 'Test not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
