<?php
/**
 * ServiceJobTest
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
use SpApi\Model\services\v1\ServiceJob;

/**
 * ServiceJobTest Class Doc Comment
 *
 * @category    Class
 * @description The job details of a service.
 * @package     SpApi
 */
class ServiceJobTest extends TestCase
{

    private ServiceJob $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ServiceJob();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ServiceJob"
     */
    public function testServiceJob()
    {
        $this->assertInstanceOf(ServiceJob::class, $this->model);
    }

    /**
     * Test attribute "create_time"
     */
    public function testPropertyCreateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCreateTime($testValue);
        $this->assertEquals($testValue, $this->model->getCreateTime());
    }

    /**
     * Test attribute "service_job_id"
     */
    public function testPropertyServiceJobId()
    {
        $testValue = 'test';
        
        $this->model->setServiceJobId($testValue);
        $this->assertEquals($testValue, $this->model->getServiceJobId());
    }

    /**
     * Test attribute "service_job_status"
     */
    public function testPropertyServiceJobStatus()
    {
        $enumInstance = new ServiceJob();
        $allowedValues = $enumInstance->getServiceJobStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setServiceJobStatus($testValue);
        $this->assertEquals($testValue, $this->model->getServiceJobStatus());
    }

    /**
     * Test attribute "scope_of_work"
     */
    public function testPropertyScopeOfWork()
    {
        
        $testValue = new \SpApi\Model\services\v1\ScopeOfWork();
        
        $this->model->setScopeOfWork($testValue);
        $this->assertEquals($testValue, $this->model->getScopeOfWork());
    }

    /**
     * Test attribute "seller"
     */
    public function testPropertySeller()
    {
        
        $testValue = new \SpApi\Model\services\v1\Seller();
        
        $this->model->setSeller($testValue);
        $this->assertEquals($testValue, $this->model->getSeller());
    }

    /**
     * Test attribute "service_job_provider"
     */
    public function testPropertyServiceJobProvider()
    {
        
        $testValue = new \SpApi\Model\services\v1\ServiceJobProvider();
        
        $this->model->setServiceJobProvider($testValue);
        $this->assertEquals($testValue, $this->model->getServiceJobProvider());
    }

    /**
     * Test attribute "preferred_appointment_times"
     */
    public function testPropertyPreferredAppointmentTimes()
    {
        $testValue = [];
        
        $this->model->setPreferredAppointmentTimes($testValue);
        $this->assertEquals($testValue, $this->model->getPreferredAppointmentTimes());
    }

    /**
     * Test attribute "appointments"
     */
    public function testPropertyAppointments()
    {
        $testValue = [];
        
        $this->model->setAppointments($testValue);
        $this->assertEquals($testValue, $this->model->getAppointments());
    }

    /**
     * Test attribute "service_order_id"
     */
    public function testPropertyServiceOrderId()
    {
        $testValue = 'test';
        
        $this->model->setServiceOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getServiceOrderId());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "store_id"
     */
    public function testPropertyStoreId()
    {
        $testValue = 'test';
        
        $this->model->setStoreId($testValue);
        $this->assertEquals($testValue, $this->model->getStoreId());
    }

    /**
     * Test attribute "buyer"
     */
    public function testPropertyBuyer()
    {
        
        $testValue = new \SpApi\Model\services\v1\Buyer();
        
        $this->model->setBuyer($testValue);
        $this->assertEquals($testValue, $this->model->getBuyer());
    }

    /**
     * Test attribute "associated_items"
     */
    public function testPropertyAssociatedItems()
    {
        $testValue = [];
        
        $this->model->setAssociatedItems($testValue);
        $this->assertEquals($testValue, $this->model->getAssociatedItems());
    }

    /**
     * Test attribute "service_location"
     */
    public function testPropertyServiceLocation()
    {
        
        $testValue = new \SpApi\Model\services\v1\ServiceLocation();
        
        $this->model->setServiceLocation($testValue);
        $this->assertEquals($testValue, $this->model->getServiceLocation());
    }
}
