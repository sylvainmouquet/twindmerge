describe('twindmerge browser test', () => {
      it('should merge classes correctly', () => {
            cy.visit('/');
            cy.window().then((win) => {
              const { merge } = win.twindmerge;
              const result = merge('text-red-500', 'text-blue-600', 'p-4', 'p-2');
              expect(result).to.equal('text-blue-600 p-2');
            });
          });
        });
