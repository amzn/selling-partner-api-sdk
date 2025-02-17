<?php
/**
 * GenerateCollectionFormResponseTest
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
use SpApi\Model\shipping\v2\GenerateCollectionFormResponse;

/**
 * GenerateCollectionFormResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GenerateCollectionFormResponse operation.
 * @package     SpApi
 */
class GenerateCollectionFormResponseTest extends TestCase
{

    private GenerateCollectionFormResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateCollectionFormResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateCollectionFormResponse"
     */
    public function testGenerateCollectionFormResponse()
    {
        $this->assertInstanceOf(GenerateCollectionFormResponse::class, $this->model);
    }

    /**
     * Test attribute "collections_form_document"
     */
    public function testPropertyCollectionsFormDocument()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\CollectionsFormDocument();
        
        $this->model->setCollectionsFormDocument($testValue);
        $this->assertEquals($testValue, $this->model->getCollectionsFormDocument());
    }
}
