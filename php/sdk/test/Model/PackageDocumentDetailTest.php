<?php
/**
 * PackageDocumentDetailTest
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
use SpApi\Model\shipping\v2\PackageDocumentDetail;

/**
 * PackageDocumentDetailTest Class Doc Comment
 *
 * @category    Class
 * @description The post-purchase details of a package that will be shipped using a shipping service.
 * @package     SpApi
 */
class PackageDocumentDetailTest extends TestCase
{

    private PackageDocumentDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageDocumentDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageDocumentDetail"
     */
    public function testPackageDocumentDetail()
    {
        $this->assertInstanceOf(PackageDocumentDetail::class, $this->model);
    }

    /**
     * Test attribute "package_client_reference_id"
     */
    public function testPropertyPackageClientReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setPackageClientReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getPackageClientReferenceId());
    }

    /**
     * Test attribute "package_documents"
     */
    public function testPropertyPackageDocuments()
    {
        $testValue = [];
        
        $this->model->setPackageDocuments($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDocuments());
    }

    /**
     * Test attribute "tracking_id"
     */
    public function testPropertyTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingId());
    }
}
