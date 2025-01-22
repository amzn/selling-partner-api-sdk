<?php
/**
 * SolicitationsActionTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\solicitations\SolicitationsAction;

/**
 * SolicitationsActionTest Class Doc Comment
 *
 * @category    Class
 * @description A simple object containing the name of the template.
 * @package     OpenAPI\Client
 */
class SolicitationsActionTest extends TestCase
{

    private SolicitationsAction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SolicitationsAction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SolicitationsAction"
     */
    public function testSolicitationsAction()
    {
        $this->assertInstanceOf(SolicitationsAction::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }
}
