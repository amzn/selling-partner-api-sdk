<?php
/**
 * GetSolicitationActionResponseLinksTest
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
use OpenAPI\Client\Model\solicitations\GetSolicitationActionResponseLinks;

/**
 * GetSolicitationActionResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description GetSolicitationActionResponseLinks
 * @package     OpenAPI\Client
 */
class GetSolicitationActionResponseLinksTest extends TestCase
{

    private GetSolicitationActionResponseLinks $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSolicitationActionResponseLinks();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSolicitationActionResponseLinks"
     */
    public function testGetSolicitationActionResponseLinks()
    {
        $this->assertInstanceOf(GetSolicitationActionResponseLinks::class, $this->model);
    }

    /**
     * Test attribute "self"
     */
    public function testPropertySelf()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\LinkObject();
        
        $this->model->setSelf($testValue);
        $this->assertEquals($testValue, $this->model->getSelf());
    }

    /**
     * Test attribute "schema"
     */
    public function testPropertySchema()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\LinkObject();
        
        $this->model->setSchema($testValue);
        $this->assertEquals($testValue, $this->model->getSchema());
    }
}
