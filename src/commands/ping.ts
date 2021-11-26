const ping: SGUniBot.Command = {
  initialHandler: async (ctx) => {
    ctx.reply('pong');
  },
};

export default ping;
