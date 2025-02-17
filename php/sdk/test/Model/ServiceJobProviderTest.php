<?php
/**
 * ServiceJobProviderTest
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
use SpApi\Model\services\v1\ServiceJobProvider;

/**
 * ServiceJobProviderTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the service job provider.
 * @package     SpApi
 */
class ServiceJobProviderTest extends TestCase
{

    private ServiceJobProvider $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ServiceJobProvider();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ServiceJobProvider"
     */
    public function testServiceJobProvider()
    {
        $this->assertInstanceOf(ServiceJobProvider::class, $this->model);
    }

    /**
     * Test attribute "service_job_provider_id"
     */
    public function testPropertyServiceJobProviderId()
    {
        $testValue = 'test';
        
        $this->model->setServiceJobProviderId($testValue);
        $this->assertEquals($testValue, $this->model->getServiceJobProviderId());
    }
}
