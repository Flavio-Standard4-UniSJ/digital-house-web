CREATE DATABASE agenda_822;

CREATE TABLE Usuario (
 id integer primary key,
 nome VARCHAR(100) not null,
 cpf integer,
 email VARCHAR(100),
 telefone VARCHAR(11),
 senha VARCHAR(200),
 pin VARCHAR(200),
 endereco TEXT,
 profissao VARCHAR(100),
 salario FLOAT,
 avatar TEXT,
 ativo CHAR(1) CHECK(ativo='S' OR ativo='N'),
 tipo_usuario VARCHAR(50),
 datacad DATE
);

CREATE TABLE Tarefa (
 id integer primary key,
 fk_id_usuario integer,
 descricao TEXT,
 status CHAR(3) CHECK(status='PEN' or status='OK'),
 prioridade VARCHAR(10) CHECK(prioridade="A" or prioridade="M" or prioridade="L"),
 data_realizacao date,
 duracao TIME,
 foreign key (fk_id_usuario) references Usuario(id)
);

CREATE TABLE Financas (
 id integer primary key,
 fk_id_usuario integer,
 tipo_conta VARCHAR(100),
 valor FLOAT,
 status CHAR(2) CHECK (status="PG" OR status="AT"),
 vencimento DATE,
 data_pagamento DATE,
 datacad DATE,
 foreign key (fk_id_usuario) references Usuario(id)
);

CREATE TABLE Contato (
 id integer primary key,
 nome VARCHAR(100),
 sexo CHAR(3) CHECK (sexo="MAS" OR sexo="FEM"),
 endereco TEXT,
 telefone INTEGER,
 email VARCHAR(100),
 avatar TEXT,
 profissao VARCHAR(100),
 ativo CHAR(1) CHECK(ativo='S' OR ativo='N'),
 datacad DATE
);

CREATE TABLE Contato_Usuario (
 id INTEGER primary key,
 fk_id_usuario INTEGER,
 fk_id_contato INTEGER,
 data_hora_contato DATE,
 recado TEXT,
 foreign key (fk_id_usuario) references Usuario(id),
 foreign key (fk_id_contato) references Contato(id)
);
