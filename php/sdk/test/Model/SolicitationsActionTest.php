<?php
/**
 * SolicitationsActionTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\solicitations\v1\SolicitationsAction;

/**
 * SolicitationsActionTest Class Doc Comment
 *
 * @category    Class
 * @description A simple object containing the name of the template.
 * @package     SpApi
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
