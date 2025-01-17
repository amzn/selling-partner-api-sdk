<?php
/**
 * GetSolicitationActionsForOrderResponseEmbeddedTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\solicitations\GetSolicitationActionsForOrderResponseEmbedded;

/**
 * GetSolicitationActionsForOrderResponseEmbeddedTest Class Doc Comment
 *
 * @category    Class
 * @description GetSolicitationActionsForOrderResponseEmbedded
 * @package     OpenAPI\Client
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
