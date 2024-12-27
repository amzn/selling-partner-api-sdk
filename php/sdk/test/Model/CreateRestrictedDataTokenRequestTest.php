<?php
/**
 * CreateRestrictedDataTokenRequestTest
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
use OpenAPI\Client\Model\tokens\CreateRestrictedDataTokenRequest;

/**
 * CreateRestrictedDataTokenRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createRestrictedDataToken operation.
 * @package     OpenAPI\Client
 */
class CreateRestrictedDataTokenRequestTest extends TestCase
{

    private CreateRestrictedDataTokenRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateRestrictedDataTokenRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateRestrictedDataTokenRequest"
     */
    public function testCreateRestrictedDataTokenRequest()
    {
        $this->assertInstanceOf(CreateRestrictedDataTokenRequest::class, $this->model);
    }

    /**
     * Test attribute "target_application"
     */
    public function testPropertyTargetApplication()
    {
        $testValue = 'test';
        
        $this->model->setTargetApplication($testValue);
        $this->assertEquals($testValue, $this->model->getTargetApplication());
    }

    /**
     * Test attribute "restricted_resources"
     */
    public function testPropertyRestrictedResources()
    {
        $testValue = [];
        
        $this->model->setRestrictedResources($testValue);
        $this->assertEquals($testValue, $this->model->getRestrictedResources());
    }
}
