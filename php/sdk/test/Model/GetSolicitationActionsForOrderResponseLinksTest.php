<?php
/**
 * GetSolicitationActionsForOrderResponseLinksTest
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
use OpenAPI\Client\Model\solicitations\v1\GetSolicitationActionsForOrderResponseLinks;

/**
 * GetSolicitationActionsForOrderResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description GetSolicitationActionsForOrderResponseLinks
 * @package     OpenAPI\Client
 */
class GetSolicitationActionsForOrderResponseLinksTest extends TestCase
{

    private GetSolicitationActionsForOrderResponseLinks $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSolicitationActionsForOrderResponseLinks();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSolicitationActionsForOrderResponseLinks"
     */
    public function testGetSolicitationActionsForOrderResponseLinks()
    {
        $this->assertInstanceOf(GetSolicitationActionsForOrderResponseLinks::class, $this->model);
    }

    /**
     * Test attribute "self"
     */
    public function testPropertySelf()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\v1\LinkObject();
        
        $this->model->setSelf($testValue);
        $this->assertEquals($testValue, $this->model->getSelf());
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
