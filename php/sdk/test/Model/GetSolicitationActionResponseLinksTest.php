<?php
/**
 * GetSolicitationActionResponseLinksTest
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
use SpApi\Model\solicitations\v1\GetSolicitationActionResponseLinks;

/**
 * GetSolicitationActionResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description GetSolicitationActionResponseLinks
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\solicitations\v1\LinkObject();
        
        $this->model->setSelf($testValue);
        $this->assertEquals($testValue, $this->model->getSelf());
    }

    /**
     * Test attribute "schema"
     */
    public function testPropertySchema()
    {
        
        $testValue = new \SpApi\Model\solicitations\v1\LinkObject();
        
        $this->model->setSchema($testValue);
        $this->assertEquals($testValue, $this->model->getSchema());
    }
}
