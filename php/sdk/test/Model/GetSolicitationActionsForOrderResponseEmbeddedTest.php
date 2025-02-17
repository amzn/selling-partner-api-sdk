<?php
/**
 * GetSolicitationActionsForOrderResponseEmbeddedTest
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
use SpApi\Model\solicitations\v1\GetSolicitationActionsForOrderResponseEmbedded;

/**
 * GetSolicitationActionsForOrderResponseEmbeddedTest Class Doc Comment
 *
 * @category    Class
 * @description GetSolicitationActionsForOrderResponseEmbedded
 * @package     SpApi
 */
class GetSolicitationActionsForOrderResponseEmbeddedTest extends TestCase
{

    private GetSolicitationActionsForOrderResponseEmbedded $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSolicitationActionsForOrderResponseEmbedded();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSolicitationActionsForOrderResponseEmbedded"
     */
    public function testGetSolicitationActionsForOrderResponseEmbedded()
    {
        $this->assertInstanceOf(GetSolicitationActionsForOrderResponseEmbedded::class, $this->model);
    }

    /**
     * Test attribute "actions"
     */
    public function testPropertyActions()
    {
        $testValue = [];
        
        $this->model->setActions($testValue);
        $this->assertEquals($testValue, $this->model->getActions());
    }
}
