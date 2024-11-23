--
-- PostgreSQL database dump
--

-- Dumped from database version 17.1
-- Dumped by pg_dump version 17.1

-- Started on 2024-11-21 16:36:47

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 24773)
-- Name: atividades_fisicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.atividades_fisicas (
    id_atividade integer NOT NULL,
    id_usuario integer,
    tipo_atividade character varying(50) NOT NULL,
    duracao integer,
    calorias_gastas integer,
    data_atividade timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    criado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    atualizado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.atividades_fisicas OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24772)
-- Name: atividades_fisicas_id_atividade_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.atividades_fisicas_id_atividade_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.atividades_fisicas_id_atividade_seq OWNER TO postgres;

--
-- TOC entry 4856 (class 0 OID 0)
-- Dependencies: 221
-- Name: atividades_fisicas_id_atividade_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.atividades_fisicas_id_atividade_seq OWNED BY public.atividades_fisicas.id_atividade;


--
-- TOC entry 226 (class 1259 OID 24803)
-- Name: configuracoes_usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.configuracoes_usuario (
    id_configuracao integer NOT NULL,
    id_usuario integer,
    notificacoes_ativadas boolean DEFAULT true,
    meta_diaria integer,
    criado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    atualizado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.configuracoes_usuario OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 24802)
-- Name: configuracoes_usuario_id_configuracao_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.configuracoes_usuario_id_configuracao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.configuracoes_usuario_id_configuracao_seq OWNER TO postgres;

--
-- TOC entry 4857 (class 0 OID 0)
-- Dependencies: 225
-- Name: configuracoes_usuario_id_configuracao_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.configuracoes_usuario_id_configuracao_seq OWNED BY public.configuracoes_usuario.id_configuracao;


--
-- TOC entry 224 (class 1259 OID 24788)
-- Name: estudos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estudos (
    id_estudo integer NOT NULL,
    id_usuario integer,
    materia character varying(100) NOT NULL,
    horas_estudo integer,
    data_estudo timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    criado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    atualizado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.estudos OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24787)
-- Name: estudos_id_estudo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estudos_id_estudo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.estudos_id_estudo_seq OWNER TO postgres;

--
-- TOC entry 4858 (class 0 OID 0)
-- Dependencies: 223
-- Name: estudos_id_estudo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estudos_id_estudo_seq OWNED BY public.estudos.id_estudo;


--
-- TOC entry 220 (class 1259 OID 24755)
-- Name: tarefas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tarefas (
    id_tarefa integer NOT NULL,
    id_usuario integer,
    titulo character varying(100) NOT NULL,
    descricao text,
    data_vencimento date,
    concluida boolean DEFAULT false,
    criado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    atualizado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.tarefas OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24754)
-- Name: tarefas_id_tarefa_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tarefas_id_tarefa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tarefas_id_tarefa_seq OWNER TO postgres;

--
-- TOC entry 4859 (class 0 OID 0)
-- Dependencies: 219
-- Name: tarefas_id_tarefa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tarefas_id_tarefa_seq OWNED BY public.tarefas.id_tarefa;


--
-- TOC entry 218 (class 1259 OID 24744)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id_usuario integer NOT NULL,
    nome character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    senha_hash character varying(255) NOT NULL,
    criado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    atualizado_em timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24743)
-- Name: usuarios_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 4860 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuarios_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;


--
-- TOC entry 4668 (class 2604 OID 24776)
-- Name: atividades_fisicas id_atividade; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.atividades_fisicas ALTER COLUMN id_atividade SET DEFAULT nextval('public.atividades_fisicas_id_atividade_seq'::regclass);


--
-- TOC entry 4676 (class 2604 OID 24806)
-- Name: configuracoes_usuario id_configuracao; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configuracoes_usuario ALTER COLUMN id_configuracao SET DEFAULT nextval('public.configuracoes_usuario_id_configuracao_seq'::regclass);


--
-- TOC entry 4672 (class 2604 OID 24791)
-- Name: estudos id_estudo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudos ALTER COLUMN id_estudo SET DEFAULT nextval('public.estudos_id_estudo_seq'::regclass);


--
-- TOC entry 4664 (class 2604 OID 24758)
-- Name: tarefas id_tarefa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tarefas ALTER COLUMN id_tarefa SET DEFAULT nextval('public.tarefas_id_tarefa_seq'::regclass);


--
-- TOC entry 4661 (class 2604 OID 24747)
-- Name: usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);


--
-- TOC entry 4846 (class 0 OID 24773)
-- Dependencies: 222
-- Data for Name: atividades_fisicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.atividades_fisicas (id_atividade, id_usuario, tipo_atividade, duracao, calorias_gastas, data_atividade, criado_em, atualizado_em) FROM stdin;



--
-- TOC entry 4850 (class 0 OID 24803)
-- Dependencies: 226
-- Data for Name: configuracoes_usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.configuracoes_usuario (id_configuracao, id_usuario, notificacoes_ativadas, meta_diaria, criado_em, atualizado_em) FROM stdin;



--
-- TOC entry 4848 (class 0 OID 24788)
-- Dependencies: 224
-- Data for Name: estudos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estudos (id_estudo, id_usuario, materia, horas_estudo, data_estudo, criado_em, atualizado_em) FROM stdin;



--
-- TOC entry 4844 (class 0 OID 24755)
-- Dependencies: 220
-- Data for Name: tarefas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tarefas (id_tarefa, id_usuario, titulo, descricao, data_vencimento, concluida, criado_em, atualizado_em) FROM stdin;



--
-- TOC entry 4842 (class 0 OID 24744)
-- Dependencies: 218
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id_usuario, nome, email, senha_hash, criado_em, atualizado_em) FROM stdin;



--
-- TOC entry 4861 (class 0 OID 0)
-- Dependencies: 221
-- Name: atividades_fisicas_id_atividade_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.atividades_fisicas_id_atividade_seq', 1, false);


--
-- TOC entry 4862 (class 0 OID 0)
-- Dependencies: 225
-- Name: configuracoes_usuario_id_configuracao_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.configuracoes_usuario_id_configuracao_seq', 1, false);


--
-- TOC entry 4863 (class 0 OID 0)
-- Dependencies: 223
-- Name: estudos_id_estudo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estudos_id_estudo_seq', 1, false);


--
-- TOC entry 4864 (class 0 OID 0)
-- Dependencies: 219
-- Name: tarefas_id_tarefa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tarefas_id_tarefa_seq', 1, false);


--
-- TOC entry 4865 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuarios_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 1, false);


--
-- TOC entry 4687 (class 2606 OID 24781)
-- Name: atividades_fisicas atividades_fisicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.atividades_fisicas
    ADD CONSTRAINT atividades_fisicas_pkey PRIMARY KEY (id_atividade);


--
-- TOC entry 4691 (class 2606 OID 24811)
-- Name: configuracoes_usuario configuracoes_usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configuracoes_usuario
    ADD CONSTRAINT configuracoes_usuario_pkey PRIMARY KEY (id_configuracao);


--
-- TOC entry 4689 (class 2606 OID 24796)
-- Name: estudos estudos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudos
    ADD CONSTRAINT estudos_pkey PRIMARY KEY (id_estudo);


--
-- TOC entry 4685 (class 2606 OID 24765)
-- Name: tarefas tarefas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT tarefas_pkey PRIMARY KEY (id_tarefa);


--
-- TOC entry 4681 (class 2606 OID 24753)
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- TOC entry 4683 (class 2606 OID 24751)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 4693 (class 2606 OID 24782)
-- Name: atividades_fisicas atividades_fisicas_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.atividades_fisicas
    ADD CONSTRAINT atividades_fisicas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);


--
-- TOC entry 4695 (class 2606 OID 24812)
-- Name: configuracoes_usuario configuracoes_usuario_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configuracoes_usuario
    ADD CONSTRAINT configuracoes_usuario_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);


--
-- TOC entry 4694 (class 2606 OID 24797)
-- Name: estudos estudos_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudos
    ADD CONSTRAINT estudos_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);


--
-- TOC entry 4692 (class 2606 OID 24766)
-- Name: tarefas tarefas_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT tarefas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);


-- Completed on 2024-11-21 16:36:48

--
-- PostgreSQL database dump complete
--

